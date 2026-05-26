import React from 'react';

export interface LanClothesHangerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClothesHangerRegular: React.FC<LanClothesHangerRegularProps>;
export default LanClothesHangerRegular;
