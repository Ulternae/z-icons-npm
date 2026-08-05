import React from 'react';

export interface LanRssSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRssSquareThin(props: LanRssSquareThinProps): React.ReactElement;
export default LanRssSquareThin;
