import React from 'react';

export interface LanSquirrelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquirrelThin(props: LanSquirrelThinProps): React.ReactElement;
export default LanSquirrelThin;
