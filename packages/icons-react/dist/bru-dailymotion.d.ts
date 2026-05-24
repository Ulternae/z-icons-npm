import React from 'react';

export interface BruDailymotionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDailymotion: React.FC<BruDailymotionProps>;
export default BruDailymotion;
