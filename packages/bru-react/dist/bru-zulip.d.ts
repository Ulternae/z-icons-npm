import React from 'react';

export interface BruZulipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruZulip(props: BruZulipProps): React.ReactElement;
export default BruZulip;
