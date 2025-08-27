//
// Vivado(TM)
// rundef.js: a Vivado-generated Runs Script for WSH 5.1/5.6
// Copyright 1986-2017 Xilinx, Inc. All Rights Reserved.
//

var WshShell = new ActiveXObject( "WScript.Shell" );
var ProcEnv = WshShell.Environment( "Process" );
var PathVal = ProcEnv("PATH");
if ( PathVal.length == 0 ) {
  PathVal = "V:/Vivado/Xilinx/SDK/2017.4/bin;V:/Vivado/Xilinx/Vivado/2017.4/ids_lite/ISE/bin/nt64;V:/Vivado/Xilinx/Vivado/2017.4/ids_lite/ISE/lib/nt64;V:/Vivado/Xilinx/Vivado/2017.4/bin;";
} else {
  PathVal = "V:/Vivado/Xilinx/SDK/2017.4/bin;V:/Vivado/Xilinx/Vivado/2017.4/ids_lite/ISE/bin/nt64;V:/Vivado/Xilinx/Vivado/2017.4/ids_lite/ISE/lib/nt64;V:/Vivado/Xilinx/Vivado/2017.4/bin;" + PathVal;
}

ProcEnv("PATH") = PathVal;

var RDScrFP = WScript.ScriptFullName;
var RDScrN = WScript.ScriptName;
var RDScrDir = RDScrFP.substr( 0, RDScrFP.length - RDScrN.length - 1 );
var ISEJScriptLib = RDScrDir + "/ISEWrap.js";
eval( EAInclude(ISEJScriptLib) );


ISEStep( "vivado",
         "-log imageProcessingSystem_wrapper.vds -m64 -product Vivado -mode batch -messageDb vivado.pb -notrace -source imageProcessingSystem_wrapper.tcl" );



function EAInclude( EAInclFilename ) {
  var EAFso = new ActiveXObject( "Scripting.FileSystemObject" );
  var EAInclFile = EAFso.OpenTextFile( EAInclFilename );
  var EAIFContents = EAInclFile.ReadAll();
  EAInclFile.Close();
  return EAIFContents;
}
