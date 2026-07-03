import React from 'react';

export interface BruPatreonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPatreon(props: BruPatreonProps): React.ReactElement;
export default BruPatreon;
