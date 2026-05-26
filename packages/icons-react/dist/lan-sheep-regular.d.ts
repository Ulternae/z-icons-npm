import React from 'react';

export interface LanSheepRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSheepRegular: React.FC<LanSheepRegularProps>;
export default LanSheepRegular;
