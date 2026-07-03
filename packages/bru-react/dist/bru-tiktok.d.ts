import React from 'react';

export interface BruTiktokProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruTiktok(props: BruTiktokProps): React.ReactElement;
export default BruTiktok;
