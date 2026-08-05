import React from 'react';

export interface LanFileMidiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMidiSolid(props: LanFileMidiSolidProps): React.ReactElement;
export default LanFileMidiSolid;
