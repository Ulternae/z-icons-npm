import React from 'react';

export interface LanCloudWordProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudWord(props: LanCloudWordProps): React.ReactElement;
export default LanCloudWord;
