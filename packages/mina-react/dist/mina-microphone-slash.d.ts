import React from 'react';

export interface MinaMicrophoneSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMicrophoneSlash(props: MinaMicrophoneSlashProps): React.ReactElement;
export default MinaMicrophoneSlash;
