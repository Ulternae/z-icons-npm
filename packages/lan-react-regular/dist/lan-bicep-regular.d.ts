import React from 'react';

export interface LanBicepRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBicepRegular(props: LanBicepRegularProps): React.ReactElement;
export default LanBicepRegular;
