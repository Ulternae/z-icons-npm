import React from 'react';

export interface LanFaceAngryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceAngry(props: LanFaceAngryProps): React.ReactElement;
export default LanFaceAngry;
