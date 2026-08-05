import React from 'react';

export interface LanSealRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSealRegular(props: LanSealRegularProps): React.ReactElement;
export default LanSealRegular;
