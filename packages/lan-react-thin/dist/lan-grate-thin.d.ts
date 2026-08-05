import React from 'react';

export interface LanGrateThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrateThin(props: LanGrateThinProps): React.ReactElement;
export default LanGrateThin;
