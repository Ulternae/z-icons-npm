import React from 'react';

export interface LanStoreThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStoreThin(props: LanStoreThinProps): React.ReactElement;
export default LanStoreThin;
