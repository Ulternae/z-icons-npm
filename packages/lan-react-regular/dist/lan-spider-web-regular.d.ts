import React from 'react';

export interface LanSpiderWebRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpiderWebRegular(props: LanSpiderWebRegularProps): React.ReactElement;
export default LanSpiderWebRegular;
