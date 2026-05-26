import React from 'react';

export interface LanSwordsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwordsRegular: React.FC<LanSwordsRegularProps>;
export default LanSwordsRegular;
