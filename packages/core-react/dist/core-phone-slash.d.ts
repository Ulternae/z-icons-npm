import React from 'react';

export interface CorePhoneSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePhoneSlash(props: CorePhoneSlashProps): React.ReactElement;
export default CorePhoneSlash;
