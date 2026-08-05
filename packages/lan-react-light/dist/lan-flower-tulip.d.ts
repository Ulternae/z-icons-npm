import React from 'react';

export interface LanFlowerTulipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlowerTulip(props: LanFlowerTulipProps): React.ReactElement;
export default LanFlowerTulip;
