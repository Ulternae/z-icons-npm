import React from 'react';

export interface BruBlueskyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruBluesky(props: BruBlueskyProps): React.ReactElement;
export default BruBluesky;
