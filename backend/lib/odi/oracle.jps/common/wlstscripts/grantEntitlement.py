
import sys

from sets import ImmutableSet as frozenset
required = frozenset(['-appStripe', '-principalName', '-principalClass', '-entitlementName'])
optional = frozenset(['-identityDomain'])
import jpsCmdHelp

argmap = jpsCmdHelp.verifyArgs(required, optional, sys.argv[1:])

if argmap == None:
    jpsCmdHelp.grantEntitlementHelp()
    exit()

appStripe = argmap['appStripe']
principalName = argmap['principalName']
principalClass = argmap['principalClass']
entitlementName = argmap['entitlementName']
identityDomain = None

if 'identityDomain' in argmap:
    identityDomain = argmap['identityDomain']

connect()
import jpsWlstCmd
jpsWlstCmd.grantEntitlement(appStripe=appStripe, principalName=principalName, principalClass=principalClass, entitlementName=entitlementName, identityDomain=identityDomain)

