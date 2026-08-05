import React from 'react';

export interface LanHandFistProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandFist(props: LanHandFistProps): React.ReactElement;
export default LanHandFist;
