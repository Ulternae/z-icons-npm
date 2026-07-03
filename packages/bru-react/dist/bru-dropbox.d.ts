import React from 'react';

export interface BruDropboxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDropbox(props: BruDropboxProps): React.ReactElement;
export default BruDropbox;
