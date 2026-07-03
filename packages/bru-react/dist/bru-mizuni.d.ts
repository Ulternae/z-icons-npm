import React from 'react';

export interface BruMizuniProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruMizuni(props: BruMizuniProps): React.ReactElement;
export default BruMizuni;
