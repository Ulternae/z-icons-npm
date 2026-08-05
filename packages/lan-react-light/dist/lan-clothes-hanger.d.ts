import React from 'react';

export interface LanClothesHangerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClothesHanger(props: LanClothesHangerProps): React.ReactElement;
export default LanClothesHanger;
