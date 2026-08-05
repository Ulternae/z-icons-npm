import React from 'react';

export interface LanHandLoveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandLoveThin(props: LanHandLoveThinProps): React.ReactElement;
export default LanHandLoveThin;
