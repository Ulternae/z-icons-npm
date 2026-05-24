import React from 'react';

export interface BruCircleZulipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCircleZulip: React.FC<BruCircleZulipProps>;
export default BruCircleZulip;
