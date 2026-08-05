import React from 'react';

export interface LanLeafMapleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLeafMapleThin(props: LanLeafMapleThinProps): React.ReactElement;
export default LanLeafMapleThin;
