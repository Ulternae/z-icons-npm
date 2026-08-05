import React from 'react';

export interface LanFilePowerpointProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePowerpoint(props: LanFilePowerpointProps): React.ReactElement;
export default LanFilePowerpoint;
