import React from 'react';

export interface BruWirsindhandwerkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruWirsindhandwerk(props: BruWirsindhandwerkProps): React.ReactElement;
export default BruWirsindhandwerk;
