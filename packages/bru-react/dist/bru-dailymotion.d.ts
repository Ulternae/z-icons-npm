import React from 'react';

export interface BruDailymotionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDailymotion(props: BruDailymotionProps): React.ReactElement;
export default BruDailymotion;
