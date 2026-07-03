import React from 'react';

export interface BruMastodonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruMastodon(props: BruMastodonProps): React.ReactElement;
export default BruMastodon;
