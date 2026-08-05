import React from 'react';

export interface LanDinosaurRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDinosaurRegular(props: LanDinosaurRegularProps): React.ReactElement;
export default LanDinosaurRegular;
