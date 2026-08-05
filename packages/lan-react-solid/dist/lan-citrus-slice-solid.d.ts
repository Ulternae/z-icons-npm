import React from 'react';

export interface LanCitrusSliceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCitrusSliceSolid(props: LanCitrusSliceSolidProps): React.ReactElement;
export default LanCitrusSliceSolid;
