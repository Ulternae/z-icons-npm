import React from 'react';

export interface LanClothesHangerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClothesHanger: React.FC<LanClothesHangerProps>;
export default LanClothesHanger;
