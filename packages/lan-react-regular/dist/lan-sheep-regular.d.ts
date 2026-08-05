import React from 'react';

export interface LanSheepRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSheepRegular(props: LanSheepRegularProps): React.ReactElement;
export default LanSheepRegular;
