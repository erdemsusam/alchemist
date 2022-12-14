package io.blue.controller

import javax.servlet.http.HttpServletResponse
import org.springframework.web.multipart.MultipartFile
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation._
import org.springframework.dao.DataIntegrityViolationException
import org.apache.commons.io.IOUtils
import com.fasterxml.jackson.databind.ObjectMapper

import io.blue.service.AppService

@RestController
@RequestMapping(Array("/api/v1/app"))
class AppController @Autowired()(private val service: AppService) {

  @RequestMapping(value = Array("/version"), method = Array(RequestMethod.GET) )
  def version = service.version

  @RequestMapping(value = Array("/test"), method = Array(RequestMethod.GET) )
  def test = service.test

  @RequestMapping(value = Array("/import"), method = Array(RequestMethod.POST))
  def importOdiObjectFromXml(
    @RequestParam("connectionId") connectionId: Long,
    @RequestParam("mode") mode: Int,
    @RequestParam("objectType") objectType: String,
    @RequestBody file: MultipartFile
  ) = service.importOdiObjectFromXml(connectionId, mode, objectType, file)

  @RequestMapping(value = Array("/export"), method = Array(RequestMethod.POST))
	def exportToXml(
    @RequestParam("connectionId") connectionId: Long,
    @RequestBody options: Map[String, String],
    response: HttpServletResponse
  ) = service.exportToXml(connectionId, options)

}