import React from 'react';

export interface LanEyesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEyesRegular(props: LanEyesRegularProps): React.ReactElement;
export default LanEyesRegular;
