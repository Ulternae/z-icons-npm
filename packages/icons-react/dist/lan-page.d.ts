import React from 'react';

export interface LanPageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPage: React.FC<LanPageProps>;
export default LanPage;
