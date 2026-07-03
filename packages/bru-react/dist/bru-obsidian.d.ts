import React from 'react';

export interface BruObsidianProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruObsidian(props: BruObsidianProps): React.ReactElement;
export default BruObsidian;
