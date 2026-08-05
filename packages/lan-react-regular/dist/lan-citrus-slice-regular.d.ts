import React from 'react';

export interface LanCitrusSliceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCitrusSliceRegular(props: LanCitrusSliceRegularProps): React.ReactElement;
export default LanCitrusSliceRegular;
