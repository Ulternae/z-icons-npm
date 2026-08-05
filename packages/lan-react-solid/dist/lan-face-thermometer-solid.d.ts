import React from 'react';

export interface LanFaceThermometerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceThermometerSolid(props: LanFaceThermometerSolidProps): React.ReactElement;
export default LanFaceThermometerSolid;
