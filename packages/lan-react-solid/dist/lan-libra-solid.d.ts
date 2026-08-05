import React from 'react';

export interface LanLibraSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLibraSolid(props: LanLibraSolidProps): React.ReactElement;
export default LanLibraSolid;
