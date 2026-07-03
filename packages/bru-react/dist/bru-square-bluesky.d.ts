import React from 'react';

export interface BruSquareBlueskyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareBluesky(props: BruSquareBlueskyProps): React.ReactElement;
export default BruSquareBluesky;
