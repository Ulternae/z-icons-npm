import React from 'react';

export interface BruZulipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruZulip: React.FC<BruZulipProps>;
export default BruZulip;
