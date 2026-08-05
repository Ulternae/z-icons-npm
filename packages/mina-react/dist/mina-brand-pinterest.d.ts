import React from 'react';

export interface MinaBrandPinterestProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandPinterest(props: MinaBrandPinterestProps): React.ReactElement;
export default MinaBrandPinterest;
