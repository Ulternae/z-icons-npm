import React from 'react';

export interface LanRadioSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRadioSolid(props: LanRadioSolidProps): React.ReactElement;
export default LanRadioSolid;
