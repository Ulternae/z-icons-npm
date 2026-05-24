import React from 'react';

export interface BruDropboxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDropbox: React.FC<BruDropboxProps>;
export default BruDropbox;
