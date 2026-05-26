import React from 'react';

export interface LanCloudWordProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudWord: React.FC<LanCloudWordProps>;
export default LanCloudWord;
