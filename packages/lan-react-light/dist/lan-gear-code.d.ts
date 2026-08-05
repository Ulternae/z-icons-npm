import React from 'react';

export interface LanGearCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGearCode(props: LanGearCodeProps): React.ReactElement;
export default LanGearCode;
