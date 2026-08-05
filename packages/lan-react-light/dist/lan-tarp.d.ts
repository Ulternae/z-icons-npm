import React from 'react';

export interface LanTarpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTarp(props: LanTarpProps): React.ReactElement;
export default LanTarp;
