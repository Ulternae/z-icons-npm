import React from 'react';

export interface BruBilibiliProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruBilibili(props: BruBilibiliProps): React.ReactElement;
export default BruBilibili;
