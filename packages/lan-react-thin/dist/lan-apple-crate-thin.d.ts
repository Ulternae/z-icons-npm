import React from 'react';

export interface LanAppleCrateThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAppleCrateThin(props: LanAppleCrateThinProps): React.ReactElement;
export default LanAppleCrateThin;
