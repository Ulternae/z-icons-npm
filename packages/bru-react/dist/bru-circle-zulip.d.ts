import React from 'react';

export interface BruCircleZulipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCircleZulip(props: BruCircleZulipProps): React.ReactElement;
export default BruCircleZulip;
